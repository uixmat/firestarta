import prisma from "./"

export async function getUserSubscription(userId: string) {
  try {
    const subscription = await prisma.subscription.findUnique({
      where: { userId: userId },
    })
    return { subscription }
  } catch (error) {
    return { error }
  }
}