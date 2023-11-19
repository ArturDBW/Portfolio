import { GitHubsvg } from "../svg/GitHubsvg";
import { Linkedlnsvg } from "../svg/Linkedlnsvg";

export const SocialMedia = () => {
  return (
    <div className="inline-flex items-center space-x-3 rounded-md bg-black bg-opacity-5 px-6 py-3 backdrop-blur-md dark:bg-white dark:bg-opacity-10">
      <GitHubsvg />
      <Linkedlnsvg />
    </div>
  );
};
