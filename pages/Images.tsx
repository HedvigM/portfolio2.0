import Image from 'next/image';

function ProfilePic() {
  return (
    <Image
      src='/../public/Pictures/profile-pic.jpg'
      alt='mountain'
      layout='fill'
    />
  );
}

export default ProfilePic;
