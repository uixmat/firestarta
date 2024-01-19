import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function User() {
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
