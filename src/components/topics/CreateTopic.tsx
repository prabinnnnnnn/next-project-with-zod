import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

const CreateTopics = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add topics</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Topic</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid items-center gap-2">
            <Label htmlFor="topic" className="font-semibold text-left">
              Topic
            </Label>
            <Input
              id="topic"
              placeholder="Enter topic"
              name="topic"
              className="col-span-3"
              readOnly
            />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="description" className="font-semibold text-left">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter description"
              className="col-span-3"
              readOnly
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTopics;
