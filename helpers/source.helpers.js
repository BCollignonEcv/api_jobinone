module.exports.getSourceType = (models, req) => {
    switch (req._parsedUrl.pathname) {
        case 'sources':
            throw ({
                error: "Missing source type",
                message: "You need to specify the type of source you are looking for"
            });
        case '/jobs':
            return models.JobSource
        case '/dwellings':
            return models.DwellingSource
        default:
            throw ({
                error: "This source type is no handle yet",
                message: "Only Jobs and Dwelling scaper are available"
            });
    }
}