package com.trust.backend.member;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/members")
@CrossOrigin(origins = "*")
public class MemberController {

    private final MemberRepository memberRepository;
    private final Cloudinary cloudinary;

    public MemberController(MemberRepository memberRepository, Cloudinary cloudinary) {
        this.memberRepository = memberRepository;
        this.cloudinary = cloudinary;
    }

    @GetMapping
    public List<Member> getMembers() {
        return memberRepository.findAll();
    }

    @PostMapping
public Member addMember(
        @RequestParam("name") String name,
        @RequestParam("role") String role,
        @RequestParam("image") MultipartFile image
) throws IOException {

    System.out.println("===== CLOUDINARY DEBUG START =====");
    System.out.println("Cloud name = " + System.getenv("CLOUDINARY_CLOUD_NAME"));
    System.out.println("API key exists = " + (System.getenv("CLOUDINARY_API_KEY") != null));
    System.out.println("API secret exists = " + (System.getenv("CLOUDINARY_API_SECRET") != null));
    System.out.println("Image empty = " + image.isEmpty());
    System.out.println("Image name = " + image.getOriginalFilename());
    System.out.println("===== CLOUDINARY DEBUG END =====");

    Map uploadResult = cloudinary.uploader().upload(
            image.getBytes(),
            ObjectUtils.asMap("folder", "bhartiya-trust/members")
    );

    String imageUrl = uploadResult.get("secure_url").toString();

    Member member = new Member();
    member.setName(name);
    member.setRole(role);
    member.setImageUrl(imageUrl);

    return memberRepository.save(member);
}

    

    @DeleteMapping("/{id}")
    public void deleteMember(@PathVariable Long id) {
        memberRepository.deleteById(id);
    }
}