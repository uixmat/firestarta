import { getUserById } from "@/lib/prisma/users";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PageProps {
  params: {
    id: string;
  };
}

async function getUser(id: string) {
  const { user } = await getUserById(id);
  if (!user) {
    throw new Error("Failed to fetch data");
  }

  return user;
}

const User = async ({ params }: PageProps) => {
  const user = await getUser(params.id);
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{user.name}</DialogTitle>
          <DialogDescription>{user.email}</DialogDescription>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quam aliquam, sit veritatis sint sed corrupti ullam aperiam enim
            quia blanditiis incidunt ex sapiente nulla velit iste atque
            explicabo animi?
          </p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default User;
