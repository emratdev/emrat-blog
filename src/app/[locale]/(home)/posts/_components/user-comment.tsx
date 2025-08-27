import { getCommentById } from "@/api/comments/get-comment.api";
import { getUserById } from "@/api/users/get-user.api";
import { Link } from "@/i18n/navigation";


export const UserComment = async( {userId, commentId }: Props) => {
    const user = await getUserById(userId);
    const comment = await getCommentById(commentId);
    return (
      <div className="comments__items">
        <div className="comments__user">
          {user?.avatar.trim() && (
            <Link className="user__avatar" href="#">
              <img
                src={user?.avatar || ""}
                alt="user-01"
                width={50}
                height={50}
              />
            </Link> 
          )}
          <Link className="user__nike" href="#">
            {user?.username}
          </Link>
        </div>
        <div className="comments__text">
          <p>{comment?.content}</p>
        </div>
      </div>
    );
}

interface Props {
    userId: number;
    commentId: number;
}