import { LuUser, LuLibraryBig, LuWrench } from "react-icons/lu";

export const sidebar = {
  userName: `Nail Tosun`,
  initials: `NT`,
  profileImage: `/images/nail_tosun_profile.jpg`,
  sections: [
    {
      title: `About Me`,
      url: ``,
      icon: LuUser
    },
    {
      title: `Publications`,
      url: `publications`,
      icon: LuLibraryBig
    },
    {
      title: `Projects`,
      url: `projects`,
      icon: LuWrench
    }
  ]
};