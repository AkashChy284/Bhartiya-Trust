package com.trust.backend.gallery;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/gallery")
@CrossOrigin(origins = "*")
public class GalleryController {

    private final GalleryRepository galleryRepository;

    public GalleryController(GalleryRepository galleryRepository) {
        this.galleryRepository = galleryRepository;
    }

    @GetMapping
    public List<GalleryImage> getGalleryImages() {
        return galleryRepository.findAll();
    }

    @PostMapping
    public GalleryImage uploadImage(@RequestParam("image") MultipartFile image) throws IOException {

        String uploadDir = System.getProperty("user.dir") + "/uploads/";
        File folder = new File(uploadDir);

        if (!folder.exists()) {
            folder.mkdirs();
        }

        String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
        File savedFile = new File(uploadDir + fileName);

        image.transferTo(savedFile);

        GalleryImage galleryImage = new GalleryImage();
        galleryImage.setImageUrl("http://localhost:8080/uploads/" + fileName);

        return galleryRepository.save(galleryImage);
    }

    @DeleteMapping("/{id}")
    public void deleteImage(@PathVariable Long id) {
        galleryRepository.deleteById(id);
    }
}