package com.trust.backend.member;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/members")
@CrossOrigin(origins = "*")
public class MemberController {

    private final MemberRepository memberRepository;

    public MemberController(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
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

        String uploadDir = System.getProperty("user.dir") + "/uploads/";
        File folder = new File(uploadDir);

        if (!folder.exists()) {
            folder.mkdirs();
        }

        String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
        File savedFile = new File(uploadDir + fileName);

        image.transferTo(savedFile);

        Member member = new Member();
        member.setName(name);
        member.setRole(role);
        member.setImageUrl("https://bhartiya-trust-6.onrender.com/uploads/" + fileName);

        return memberRepository.save(member);
    }

    @DeleteMapping("/{id}")
    public void deleteMember(@PathVariable Long id) {
        memberRepository.deleteById(id);
    }
}