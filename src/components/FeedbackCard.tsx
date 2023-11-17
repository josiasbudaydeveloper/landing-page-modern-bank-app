import { quotes } from "../assets";

export default function FeedbackCard({ ...card } : 
{
  content: string,
  name: string,
  title: string,
  img: string
}) {
  // Just putting it here to not break the building process while I'm developing this component
  card;

  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[37px]
     md:mr-10 sm:mr-5 mr-0 my-5 feedback-card
    ">
      <img src={quotes} alt="double-quotes" className="w-[42px] h-[27px] object-contain" />
    </div>
  )
}