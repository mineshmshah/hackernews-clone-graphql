function postedBy(parent, args, context) {
    return context.prisma.link({ id: parentId }).postedBy()
}

module.exports = {
    postedBy
}