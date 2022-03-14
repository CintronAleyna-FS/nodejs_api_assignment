const { dogBreedListService,
    dogImageByBreed } = require("./dogBreedServices");

jest.mock("./dogBreedServices.js")

describe("Dog Breed Service Tests", () => {
    test("Should return a list of all dog breeds", async () => {
        const result = await dogBreedListService();
    });
    test("Should return a success message if image was received of dog by breed", async () => {
        const result = await dogImageByBreed();
    })
})