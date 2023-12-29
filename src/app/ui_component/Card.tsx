import Image from "next/image";

export default function Card({
  name,
  role,
  team,
}: {
  name: string;
  role?: string;
  team?: string;
}) {
  return (
    <div className="w-[17rem] min-w-max h-fit rounded-xl overflow-hidden shadow-md border-x border-b select-none">
      <div className="bg-[#006aff] h-1 w-full" />
      <div className="pt-4 px-8 pb-6 flex flex-col items-center">
        <Image
          className="ml-auto cursor-pointer"
          priority
          src="/ic_edit.svg"
          height={24}
          width={24}
          alt="Profile Picture"
        />

        <Image
          priority
          src="/ic_default_person.svg"
          height={75}
          width={75}
          alt="Profile Picture"
        />

        <span className="text-black font-semibold text-base mt-4">{name}</span>
        {role && (
          <div className="mt-4 flex flex-row w-full items-center gap-2">
            <span className="px-3 py-[0.15rem] text-[0.7rem] w-[4rem] leading-4 font-semibold rounded-sm bg-[#f4eeff] flex justify-center">
              ROLE
            </span>
            <span className="text-xs text-[#666666] font-semibold">{role}</span>
          </div>
        )}
        {team && (
          <div className="mt-2 flex flex-row w-full items-center gap-2">
            <span className="px-3 py-[0.15rem] text-[0.7rem] w-[4rem] leading-4 font-semibold rounded-sm bg-[#f4eeff] flex justify-center">
              TEAM
            </span>
            <span className="text-xs text-[#666666] font-semibold">{team}</span>
          </div>
        )}
      </div>
    </div>
  );
}
