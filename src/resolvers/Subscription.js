function newLinkSubscription(parent, args, context, info) {
    return context.prisma.$subscribe.link({ mutation_in: ['CREATED']}).node()
}