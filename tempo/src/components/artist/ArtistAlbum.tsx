import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
type Props = {
  artistAlbums: any;
};

const ArtistAlbum = ({ artistAlbums }: Props) => {
  const Navigate = useNavigate();
  return (
    <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="flex items-center justify-center">
      {artistAlbums?.slice(0, 6).map((album: any) => (
        <SwiperSlide key={album?.id || album?.albumId}>
          <div
            onClick={() =>
              Navigate(
                `/artist/album/${album?.albumId ? album?.albumId : album?.id}`
              )
            }
            className="hover:scale-105 duration-300 ease-in-out rounded-md"
          >
            <img
              src={
                album?.attributes?.artwork?.url
                  .replace("{w}", "175")
                  .replace("{h}", "175") ||
                album?.Image?.replace("{w}", "175").replace("{h}", "175")
              }
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ArtistAlbum;
