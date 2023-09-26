import { ArtistAlbums, UserAlbums } from "@/types/types";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  artistAlbums: ArtistAlbums[] & UserAlbums[] | null;
};

const ArtistAlbum = ({ artistAlbums }: Props) => {
  const Navigate = useNavigate();
  return (
    <Swiper
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }}
    >
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
