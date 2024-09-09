export const galleryScrollContent = (GetThemeStatus, eventImages, weddingImages) => {
    // console.log("scroll-content", GetThemeStatus, weddingImages, eventImages);
    return !GetThemeStatus ? eventImages : weddingImages;
}
