import useDominantColor from "../hooks/useDominantColor"

const PokeCard = ({data}) => {
  const {dominantColor, darkerColor} = useDominantColor(data?.sprites?.other['dream_world'].front_default);
  console.log(data)
  return (
    <>
    {data ? <section className="w-[261px] h-[383px] rounded-lg border-8" style={{backgroundColor: dominantColor, borderColor: darkerColor}}>
      <img src={data.sprites?.other['official-artwork'].front_default} alt="img" />
    </section>
  : <p>Cargando...</p>
  }
  </>
  )
}
export default PokeCard