function tennisEquipment(input) {
let racketPrice = input[0];
let racketQty = input[1];
let sneakersQty = input[2];

let otherEquipmentPrice = (racketPrice * racketQty + racketPrice / 6 * sneakersQty) * 0.20;
let totalPrice = racketPrice * racketQty + racketPrice / 6 * sneakersQty + otherEquipmentPrice;

console.log(`Price to be paid by Djokovic ${Math.floor(totalPrice / 8)}`);
console.log(`Price to be paid by sponsors ${Math.ceil(totalPrice / 8 * 7)}`);

}

tennisEquipment([850, 4, 2])