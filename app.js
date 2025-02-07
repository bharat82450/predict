/**
 * Handles the page load event.
 */
function onPageLoad() {
    console.log("Document loaded");

    const url = "/api/locations";

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function(data, status) {
            console.log("Locations retrieved successfully");
            if (data && data.locations) {
                const locations = data.locations;
                const $uiLocations = $("#uiLocations");

                // Clear existing options
                $uiLocations.empty();

                // Populate the select element with new options
                locations.forEach(function(location) {
                    const option = new Option(location);
                    $uiLocations.append(option);
                });
            } else {
                console.error("Invalid response data");
            }
        },
        error: function(xhr, status, error) {
            console.error("Failed to retrieve locations:", error);
        }
    });
}

// Assign the onPageLoad function to the window's onload event
window.addEventListener("load", onPageLoad);