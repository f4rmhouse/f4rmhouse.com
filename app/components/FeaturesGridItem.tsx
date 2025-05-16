import Image from 'next/image'

interface FeaturesGridItemProps {
  imageSrc: string
  imageAlt: string
  title: string
}

export default function FeaturesGridItem({ imageSrc, imageAlt, title }: FeaturesGridItemProps) {
  return (
    <div className="mt-10 mx-auto">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={150}
        height={150}
        priority
        className="rounded-md mx-auto"
      />
      <h2 className="text-xl mx-auto text-center pt-2">{title}</h2>
    </div>
  )
}