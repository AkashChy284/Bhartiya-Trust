package com.trust.backend.gallery;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/gallery")
@CrossOrigin(origins = "*")
public class GalleryController {

    private final GalleryRepository galleryRepository;
    private final Cloudinary cloudinary;

    public GalleryController(GalleryRepository galleryRepository, Cloudinary cloudinary) {
        this.galleryRepository = galleryRepository;
        this.cloudinary = cloudinary;
    }

    @GetMapping
    public List<GalleryImage> getGalleryImages() {
        return galleryRepository.findAll();
    }

    @PostMapping
    public GalleryImage uploadImage(@RequestParam("image") MultipartFile image) throws IOException {

        Map uploadResult = cloudinary.uploader().upload(
                image.getBytes(),
                ObjectUtils.asMap("folder", "bhartiya-trust/gallery")
        );

        String imageUrl = uploadResult.get("secure_url").toString();

        GalleryImage galleryImage = new GalleryImage();
        galleryImage.setImageUrl(imageUrl);

        return galleryRepository.save(galleryImage);
    }

    @DeleteMapping("/{id}")
    public void deleteImage(@PathVariable Long id) {
        galleryRepository.deleteById(id);
    }
}