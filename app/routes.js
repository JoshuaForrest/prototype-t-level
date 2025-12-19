//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Make '/' render your start page template
router.get('/', (req, res) => {
  res.render('start')
})

router.post('/national-grid-answer', function (req, res) {
  const nationalGrid = req.session.data['national-grid']

  if (nationalGrid === 'Yes') {
    return res.redirect('/business-ownership')
  }

  // Stores failure reason and redirects to ineligible page
  req.session.data.failureReason = 'national-grid'
  return res.redirect('/ineligible')
})

router.post('/business-ownership-answer', function (req, res) {
  const businessOwnership = req.session.data['business-ownership']

  if (businessOwnership === 'Yes') {
    return res.redirect('/additional-details')
  }

  // Stores failure reason and redirects to ineligible page
  req.session.data.failureReason = 'business-ownership'
  return res.redirect('/ineligible')
})
