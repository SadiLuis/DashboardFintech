import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const PerfilAvatar = () => {
  return (
    <Avatar className="cursor-pointer">
      <AvatarImage src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?t=st=1709993064~exp=1709996664~hmac=60b8c5843e7e0ef1caae88785441a9ce9bf7e67d24e81b6672ffc4a0e4ef98a0&w=826" alt="avatar"/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export default PerfilAvatar