"use client";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Modal() {
  const router = useRouter();
  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Username</DialogTitle>
          <DialogDescription>email</DialogDescription>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quam aliquam, sit veritatis sint sed corrupti ullam aperiam enim
            quia blanditiis incidunt ex sapiente nulla velit iste atque
            explicabo animi?
          </p>
          <span onClick={() => router.back()}>Close modal</span>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
