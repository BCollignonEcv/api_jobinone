module.exports.isNotEmpty = (obj) =>{
    return (typeof obj === 'object' && obj.length > 0);
}