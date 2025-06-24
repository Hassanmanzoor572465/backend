const asyncHandler = (requestHanfler) => { (req, res, next) => {
    Promise.resolve(requestHanfler(req, res, next)).catch((error) => next(error));
}

}

export default asyncHandler