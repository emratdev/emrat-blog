"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Name } from "@/types/name.type";
import { Group } from "./group";
import { CustomSunEditor } from "@/components/custom-suneditor";
import { Button } from "@/components/ui/button";
import { createPost } from "@/api/posts/create-post.api";
import { dataUrl } from "@/lib/data-url.util";
import { getUser } from "@/actions/get-user.action";
import { useRouter } from "@/i18n/navigation";

export const PostForm = () => {
  const { register, handleSubmit, control, reset } = useForm<FormFields>();

  const router = useRouter();

  const onSubmit = (data: FormFields) => {
    startTransition(async () => {
        const imageString = await dataUrl(data.postImage);

        const session = await getUser();

        if (!session) {
            return alert("User not found"); 
        }

        

        if (imageString) {
            const response = await createPost({
                author_id: session.id,
                title: data.postTitle,
                content: data.postContent,
                created_at: new Date(),
                main_photo: imageString,
                
            });

            if (!response?.id) {
                return alert("Post not created"); 
            }

            router.refresh();
            reset();

            alert("Post created successfully");
        }
    })
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <Label htmlFor="nameRU">Name in (ru)</Label>
        <Input
          required
          id="nameRU"
          placeholder="Enter in RU"
          {...register("postTitle.ru")}
        />
      </Group>

      <Group>
        <Label htmlFor="nameEN">Name in (en)</Label>
        <Input
          required
          id="nameEN"
          placeholder="Enter in EN"
          {...register("postTitle.en")}
        />
      </Group>

      <Group>
        <Label htmlFor="postImage">Upload image</Label>
        <Input
          required
          id="postImage"
          type="file"
          accept="image/*"
          {...register("postImage")}
        />
      </Group>

      <Controller
        control={control}
        name="postContent.ru"
        render={({ field }) => (
          <Group>
            <Label htmlFor="postContent">Content(ru)</Label>
            <CustomSunEditor
              defaultValue={field.value}
              onChange={field.onChange}
            />
          </Group>
        )}
      />

      <Controller
        control={control}
        name="postContent.en"
        render={({ field }) => (
          <Group>
            <Label htmlFor="postContent">Content(en)</Label>
            <CustomSunEditor
              defaultValue={field.value}
              onChange={field.onChange}
            />
          </Group>
        )}
      />

      <Button type="submit" className="w-full">
        Create POST
      </Button>
    </form>
  );
};

interface FormFields {
  postTitle: Name;
  postImage: FileList;
  postContent: Name;
}
