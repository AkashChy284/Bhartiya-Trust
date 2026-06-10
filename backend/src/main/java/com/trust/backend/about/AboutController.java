package com.trust.backend.about;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/about-content")
@CrossOrigin(origins = "*")
public class AboutController {

    private final AboutRepository aboutRepository;

    public AboutController(AboutRepository aboutRepository) {
        this.aboutRepository = aboutRepository;
    }

    @GetMapping
    public AboutContent getAboutContent() {
        List<AboutContent> list = aboutRepository.findAll();

        if (list.isEmpty()) {
            AboutContent about = new AboutContent();
            about.setTitle("About Bharatiya Welfare Trust");
            about.setDescription("");
            about.setMission("");
            about.setVision("");
            return aboutRepository.save(about);
        }

        return list.get(0);
    }

    @PutMapping("/{id}")
    public AboutContent updateAboutContent(
            @PathVariable Long id,
            @RequestBody AboutContent updated
    ) {
        AboutContent about = aboutRepository.findById(id).orElseThrow();

        about.setTitle(updated.getTitle());
        about.setDescription(updated.getDescription());
        about.setMission(updated.getMission());
        about.setVision(updated.getVision());

        return aboutRepository.save(about);
    }
}