module.exports = function main(inputs) {
    var price = 6 + 0.25 * inputs.parkTime + Math.min(6, Math.max(0, inputs.distance - 2)) * 0.8 + Math.max(0, inputs.distance - 8) * 1.2;
    return Math.round(price);
};