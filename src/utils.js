function getAxiosRequestConfig(method, url, data)
{
    return {
        method,
        url,
        data,
        // False if testing, true if in production.
        withCredentials: process.env.REACT_APP_ENVIRONMENT === 'Production' ? false : true
    }
}

function getAxiosRequestErrorMessage(error) {
    try {
        if (error.code === 'ECONNABORTED')
            return 'The servers are currently busy or down, please try again later!'
        else if (error.message === 'Network Error')
            return 'Something is wrong with your network connection. Please make sure you are connected to the internet and then reload your browser.'
        else if (error.response.data.message !== undefined)
            return error.response.data.message
        else
            return 'Something went wrong, please try again!'
    } catch(e) {
        return 'Something went wrong, please try again!'
    }
}

module.exports = { getAxiosRequestConfig, getAxiosRequestErrorMessage }