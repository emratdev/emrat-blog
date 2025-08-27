"use client";

import { createComment } from "@/api/comments/create-comment.api";
import { getUsers } from "@/api/users/get-users.api";
import { useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";


export const CommentForm = () => {
    const {register, handleSubmit, reset } = useForm<FormFields>({
        defaultValues: {
            comment: "Write something here",
        },
    });
    const { id } = useParams<{ id: string }>();
    const router = useRouter();

    const onSubmit = (data: FormFields) => {
        startTransition(async () => {
            const users = await getUsers({
                email: data.email,
                username: data.username,
                password: data.password
            });
            if (!users.length) {
                return alert("User not found");
            }

            const user = users?.[0];

            if (user) {
                 const response = await createComment({
                   content: data.comment,
                   postId: +id,
                   userId: user.id,
                 });

                 if (!response?.id) {
                     return alert("Comment not created");
                 } 

                 router.refresh();
                 reset();
            }

           
        })
    }
    return <div className="space-y-10">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__title">
            <h3 className="title">Comment it:</h3>
          </div>
          <div className="form__comment">
            <textarea
              className="comment"
              required
              {...register("comment")}
            />
          </div>
          <div className="form__info">
            <input className="input" type="text" placeholder="Username" required {...register("username")}/>
            <input className="input" type="email" placeholder="Email" required {...register("email")}/>
            <input className="input" type="password" placeholder="Password" required {...register("password")}/>
          </div>
          <button className="button" type="submit">
            Comment
          </button>
        </form>
      </div>
}

interface FormFields {
    comment: string;
    username: string;
    email: string;
    password: string;
}