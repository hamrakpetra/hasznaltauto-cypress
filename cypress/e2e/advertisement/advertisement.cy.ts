import advertisementPage from "../../pages/AdvertisementPage";
import advertisementData from "../../fixtures/advertisement.json";

describe("Advertisement", () => {
    beforeEach(() => {
        advertisementPage.visit(advertisementData.advertisement.path);
    });

    it("adds the advertisement to parking", () => {
        advertisementPage
            .getParkingButton()
            .should("be.visible")
            .and("contain.text", advertisementData.parking.addButtonText);

        advertisementPage.addToParking();

        advertisementPage
            .getParkingButton()
            .should("contain.text", advertisementData.parking.removeButtonText);
    });
});