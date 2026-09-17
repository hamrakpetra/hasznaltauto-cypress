class AdvertisementPage {
    visit(path: string) {
        cy.visit(path);
    }

    getParkingButton() {
        return cy.get('[data-controller="details--parking-button"]');
    }

    addToParking() {
        this.getParkingButton().click();
    }
}

export default new AdvertisementPage();