module.exports = goodUsers => submittedUsers => submittedUsers.every(submitedUser => goodUsers.some(goodUser => goodUser.id === submitedUser.id))