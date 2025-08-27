"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { PostForm } from "./post-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const CreatePost = () => {
    const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
    <Button onClick={()=> setOpen(true)}>
        <span>Create</span>
    </Button>
      <SheetContent className="px-5 overflow-y-auto pb-10">
        <SheetHeader>
          <SheetTitle>Create POST</SheetTitle>
        </SheetHeader>
        <PostForm/>
      </SheetContent>
    </Sheet>
  );
};
