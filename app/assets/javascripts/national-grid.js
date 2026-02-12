document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="national-grid"]');
    const gridRef = document.querySelector('.grid-reference');

    function toggleGridReference() {
        const selected = document.querySelector('input[name="national-grid"]:checked');
        if (selected && selected.value === "Yes") {
            gridRef.classList.remove("hide");
        } else {
            gridRef.classList.add("hide");
        }
    }

    // Attach listener to each radio
    radios.forEach(radio => {
        radio.addEventListener("change", toggleGridReference);
    })

    // Run on page load in case of pre‑selected value
    toggleGridReference()
})
