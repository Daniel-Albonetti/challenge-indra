
export const getYears = (fechaNacimiento:string) => {

    const currentYear = new Date().getFullYear();
    const birthYear = new Date(fechaNacimiento).getFullYear();
    const years = currentYear - birthYear;

    return years;

}