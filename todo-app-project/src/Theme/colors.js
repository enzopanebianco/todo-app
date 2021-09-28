import BgLight from '../assets/img/bg-desktop-light.jpg';
import BgDark from '../assets/img/bg-desktop-dark.jpg';
import BgMobileLight from '../assets/img/bg-mobile-light.jpg';
import BgMobileDark from '../assets/img/bg-mobile-dark.jpg';
import Moon from '../assets/img/icon-moon.svg';
import Sun from '../assets/img/icon-sun.svg';

///OBJETOS DE TEMA DARK E LIGHT QUE SERÃO CHAMADOS NOS COMPONENTES
export const LightTheme = {
    title:'light',
    Primary: '#ebeff0',
    List:'hsl(0, 0%, 98%)',
    Text: 'hsl(235, 19%, 35%)',
    BgImg:BgLight,
    BgMobileImg:BgMobileLight,
    IconChangeTheme:Moon,

    LightGrayishBlue: 'hsl(233, 11%, 84%)',
    DarkGrayishBlue: 'hsl(236, 9%, 61%)',
    VeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
}

export const DarkTheme = {
    title:'dark',
    Primary: 'hsl(235, 21%, 11%)',
    List: 'hsl(235, 24%, 19%)',
    Text: 'hsl(234, 39%, 85%)',
    TextHover: 'hsl(236, 33%, 92%)',
    BgImg:BgDark,
    BgMobileImg:BgMobileDark,
    IconChangeTheme:Sun,

    DarkGrayishBlue: 'hsl(234, 11%, 52%)',
    VeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',

}