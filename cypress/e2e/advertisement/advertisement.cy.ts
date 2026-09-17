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

    it("reveals the seller email address", () => {
        advertisementPage
            .getEmailRevealButton()
            .should("be.visible")
            .and("contain.text", advertisementData.contact.emailRevealText);

        advertisementPage.revealEmail();

        advertisementPage
            .getRevealedEmail()
            .should("be.visible")
            .and("contain.text", advertisementData.contact.expectedEmail);
    });

    it("reveals the seller phone number", () => {
        advertisementPage
            .getPhoneRevealButton()
            .should("be.visible")
            .and("contain.text", advertisementData.contact.phoneRevealText);

        advertisementPage.revealPhone();

        advertisementPage
            .getRevealedPhone()
            .should("be.visible")
            .and("contain.text", advertisementData.contact.expectedPhone);
    });

    it("passes the correct advertisement data to the financing calculator", () => {
        advertisementPage
            .getFinancingLink()
            .should("be.visible")
            .and("have.attr", "target", "_blank")
            .invoke("attr", "href")
            .then((href) => {
                expect(href).to.exist;

                const trackingUrl = new URL(href!);
                const financingUrl = trackingUrl.searchParams.get("ct0");

                expect(financingUrl).to.exist;

                const url = new URL(financingUrl!);
                const params = url.searchParams;

                expect(params.get("vetelar")).to.equal(advertisementData.financing.price);
                expect(params.get("gyartasiev")).to.equal(advertisementData.financing.year);
                expect(params.get("gyartasiho")).to.equal(advertisementData.financing.month);
                expect(params.get("gepjarmutipus")).to.equal(advertisementData.financing.vehicleType);
                expect(params.get("gepjarmumarka")).to.equal(advertisementData.financing.vehicle);
                expect(params.get("brand")).to.equal(advertisementData.financing.brand);
                expect(params.get("model")).to.equal(advertisementData.financing.model);
                expect(params.get("power")).to.equal(advertisementData.financing.power);
                expect(params.get("fuel")).to.equal(advertisementData.financing.fuel);
            });
    });
});