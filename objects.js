function getName(user) {
    return user.name;
}

function setName(user, name) {
    user.name = name;
}

function addFavoriteColor(user, color) {
    user.favoriteColors.push(color);
}

module.exports = {
    getName,
    setName,
    addFavoriteColor,
};
