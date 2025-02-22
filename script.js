document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    const radioButtons = document.querySelectorAll("input[type='radio']");
    const addButton = document.querySelector(".addButton");
    const totalPriceElement = document.querySelector(".total p:nth-child(2)"); // Selecting the Total USD element

    radioButtons.forEach(radio => {
        radio.addEventListener("change", function () {
            boxes.forEach(box => {
                const options = box.querySelector(".options");
                if (box.contains(this)) {
                    box.classList.add("expanded");
                    options.style.display = "block";
                    
                    // Update the total price when a radio button is selected
                    const selectedPrice = box.querySelector(".Unit-row p:last-child").innerText.trim();
                    totalPriceElement.innerText = `Total: ${selectedPrice}`; // Update total price
                } else {
                    box.classList.remove("expanded");
                    options.style.display = "none";
                }
            });
        });
    });

    // Initialize by hiding all options on load
    boxes.forEach(box => {
        const options = box.querySelector(".options");
        options.style.display = "none";
    });

    addButton.addEventListener("click", function () {
        const selectedRadio = document.querySelector("input[type='radio']:checked");
        
        if (!selectedRadio) {
            alert("Please select a unit before adding to cart.");
            return;
        }

        // Get the selected box
        const selectedBox = selectedRadio.closest(".box");

        // Extract unit info
        const unitText = selectedBox.querySelector("b").innerText.trim();
        const priceText = selectedBox.querySelector(".Unit-row p:last-child").innerText.trim();

        // Extract selected sizes and colors
        const sizes = [...selectedBox.querySelectorAll("select[id^='size']")].map(select => select.value);
        const colors = [...selectedBox.querySelectorAll("select[id^='color']")].map(select => select.value);

        // Store data in an object
        const cartData = {
            unit: unitText,
            price: priceText,
            sizes: sizes,
            colors: colors
        };

        console.log("Added to Cart:", cartData);
        alert("Added to cart successfully! Thank you");
    });
});
