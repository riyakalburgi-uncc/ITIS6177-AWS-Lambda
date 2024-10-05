module.exports.handler = async (event) => {
    const keyword = event.queryStringParameters.keyword || '';
    const name = "Riya";

    return {
        statusCode: 200,
        body: JSON.stringify(`${name} says ${keyword}`),
    };
};
