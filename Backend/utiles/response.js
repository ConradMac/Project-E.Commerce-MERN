module.exports.responseReturn = (res, code, data) => {
    // on return le code et les données en format json
    return res.status(code).json(data);
};
