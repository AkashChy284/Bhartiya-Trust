package com.trust.backend.controller;

import com.trust.backend.model.Member;
import com.trust.backend.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
public class MemberController {

    @Autowired
    private MemberRepository memberRepository;

    @GetMapping
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    @PostMapping
    public Member createMember(@RequestBody Member member) {
        return memberRepository.save(member);
    }

    @GetMapping("/{id}")
    public Member getMemberById(@PathVariable String id) {
        return memberRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteMember(@PathVariable String id) {
        memberRepository.deleteById(id);
    }
}
