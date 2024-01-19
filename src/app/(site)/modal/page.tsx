import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function UserModal() {
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Username</DialogTitle>
          <DialogDescription>Text</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
