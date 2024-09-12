'use client'

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Linkedin,
    Mail,
    Code,
    Database,
    PenTool,
    Cloud,
    X,
    Menu,
    ActivityIcon,
    Briefcase,
    Target,
    Users, ChevronRight, Calendar, ArrowUpRight
} from 'lucide-react';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className, id }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            id={id}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
            }}
            className={`${className}`}
        >
            {children}
        </motion.section>
    );
};

const EnhancedHomeSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <Section id="home" className="bg-gradient-to-br from-blue-100 to-indigo-200">
            <div
                ref={containerRef}
                className="min-h-screen flex items-center relative overflow-hidden"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-32 relative z-10">
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ y: textY }}
                    >
                        <motion.h5
                            className="text-xl sm:text-2xl text-blue-700 mb-2 text-center md:text-left"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Backend Developer
                        </motion.h5>
                        <motion.h1
                            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 text-center md:text-left"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            LEE SEUNG MIN
                        </motion.h1>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-600 mb-8 text-center md:text-left"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            코드에 서비스의 가치를 담는 개발자
                        </motion.p>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-20"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl opacity-20"
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -180, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />

                <motion.div
                    className="absolute bottom-0 right-32 w-1/2 h-4/5 lg:block"
                    style={{ scale: imageScale }}
                >
                    <Image
                        src={require("./images/profile.png")}
                        alt='lee'
                        layout="fill"
                        objectFit="contain"
                        objectPosition="bottom right"
                    />
                </motion.div>
            </div>
        </Section>
    );
};

const AboutSection: React.FC = () => {
    return (
        <Section id="about" className="bg-gray-800 py-20 min-h-screen flex justify-center">
            <div className="px-4 max-w-screen-xl flex flex-col justify-center">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-xl text-gray-200">
                        저는 서비스의 가치를 담는 백엔드 개발자 이승민입니다. 협업과 성장에 대한 끊임없는 열정으로 발전하고 있습니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-2 gap-8 lg:gap-6 ">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <Briefcase className="text-blue-300 w-12 h-12 mb-4"/>
                        <h3 className="text-2xl font-bold mb-2 text-gray-100">프로젝트 구현 및 배포</h3>
                        <p className="text-gray-400">
                            여러 협업 프로젝트에서 아키텍처 설계부터 배포까지 경험을 쌓으며, 원활한 커뮤니케이션으로 팀과 함께 더 나은 결과를 만들었습니다.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <Target className="text-red-300 w-12 h-12 mb-4" />
                        <h3 className="text-2xl font-bold mb-2 text-gray-100">도전과 성장</h3>
                        <p className="text-gray-400">
                            문제를 해결하는 것을 넘어서 서비스에 가치를 더할 수 있는 방법을 끊임없이 고민하며, 자기개발을 멈추지 않고 있습니다.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <Users className="text-green-300 w-12 h-12 mb-4" />
                        <h3 className="text-2xl font-bold mb-2 text-gray-100">커뮤니케이션과 협업</h3>
                        <p className="text-gray-400">
                            올바른 파트너십을 통해 협업의 시너지를 극대화하며, 효율적인 일정 관리로 모든 업무를 기한 내에 완수하는 것을 목표로 합니다.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <ActivityIcon className="text-yellow-300 w-12 h-12 mb-4" />
                        <h3 className="text-2xl font-bold mb-2 text-gray-100">책임감과 리더십</h3>
                        <p className="text-gray-400">
                            맡은 일에 대한 책임감을 가지고 적극적으로 문제를 해결하며, 리더로서 팀의 성공을 위한 방향성을 제시합니다.
                        </p>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

const SkillCard: React.FC<{ skill: string; bgColor: string }> = ({ skill }) => (
    <motion.div
        className={`rounded-lg p-2 text-sm text-white bg-gray-700`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ minWidth: 'fit-content', padding: '8px 12px' }}
    >
        {skill}
    </motion.div>
);

const SkillsSection = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["Java", "Python", "TypeScript"],
            icon: Code,
            color: "text-blue-400",
            bgColor: "bg-blue-500",
        },
        {
            title: "Frameworks & Libraries",
            skills: ["Spring Boot", "Play"],
            icon: PenTool,
            color: "text-green-400",
            bgColor: "bg-green-500",
        },
        {
            title: "Infrastructure & Database",
            skills: ["Jenkins", "AWS RDS", "AWS S3", "GCP", "MongoDB", "MySQL"],
            icon: Database,
            color: "text-purple-400",
            bgColor: "bg-purple-500",
        },
        {
            title: "Tools",
            skills: ["Git", "Slack", "Postman", "Jira", "Confluence"],
            icon: Cloud,
            color: "text-red-400",
            bgColor: "bg-red-500",
        },
    ];

    return (
        <Section id="skills" className="bg-gray-900 py-20 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-white">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className={`p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center mb-4">
                                <category.icon className={`${category.color} mr-3`} size={30} />
                                <h3 className={`text-2xl font-bold ${category.color}`}>{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <SkillCard key={i} skill={skill} bgColor={category.bgColor} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

interface Project {
    title: string;
    description: string;
    link?: string;
    details: string;
}

const Modal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <motion.div
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: 50, opacity: 0}}
                className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <X size={24}/>
                    </button>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="text-gray-300 mb-6 whitespace-pre-line">
                    {project.details.split('\n').map((paragraph, index) => (
                        <React.Fragment key={index}>
                            {paragraph}
                            <br/>
                            <br/>
                        </React.Fragment>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}

const projects: Project[] = [
    {
        title: "두근(Doogeun)",
        description: "대학생들을 위한 소개팅 플랫폼",
        details: `Spring boot, JPA, React, Google Cloud Platform, Git, RDS(MySQL), S3를 활용한 웹 기반 소개팅 및 미팅 플랫폼 (2022.09 ~ 2023.06)

주요 특징
• 매칭 알고리즘을 이용한 1:1 소개팅 및 N:N 미팅 서비스
• JWT를 활용한 사용자 인증 및 인가 구현
• 사용자 프로필 및 이상형 정보 기반 추천 알고리즘
• 마이페이지에서 회원 정보 관리 및 참여 이력 확인
• Google Cloud Platform을 이용한 서버 배포 및 모니터링

개발 동기
코로나19로 인한 사회적 거리두기와 비대면 수업 증가로 학생들 간 만남이 줄어들어 학업 의지 저하와 학교 생활에 대한 회의감 해소를 위해 기획

주요 기능
1. 1:1 매칭 추천: 사용자 프로필과 이상형 정보를 바탕으로 가중치 계산 후 매일 2명의 상대방 추천
2. N:N 미팅: 누구나 호스트가 되어 미팅방 개설 가능, 다른 방에 참여하여 만남 주선
3. 마이페이지: 회원 정보 확인, 참여한 미팅 및 소개팅 이력 관리

기술적 특징
• Spring boot와 JPA를 이용한 백엔드 개발
• MySQL을 활용한 사용자, 1:1 매칭, 미팅 서비스 간 연관 관계 관리
• 토큰 기반 인증 방식 채택으로 높은 확장성 확보

추가 진행 사항
• 1:1 매칭에서 채팅 기능 추가 완료 (2023.09.28)
• CI/CD 환경 구축 준비 중 (2023.10)
• N:N 모임 채팅 기능 개발 예정 (2023.11)
• 웹 내 커뮤니티 기능(후기, 장소 추천 등) 추가 예정 (2023.12)`
    },
    {
        title: "천식 환자를 위한 건강 관리 서비스",
        description: "IoT 기기와 FITBIT을 활용한 실시간 건강 모니터링 서비스",
        details: `라즈베리파이와 온습도 센서를 연결하여 주변 환경 데이터를 실시간으로 수집하고, FITBIT을 활용하여 천식 환자를 위한 사용자의 건강 데이터를 확보하여 건강 관리 서비스를 제공하는 프로젝트입니다.

주요 특징
• 실시간 환경 데이터 수집 및 분석
• 사용자 건강 데이터와 환경 데이터의 통합 관리
• AWS IoT Core와 Lambda를 활용한 데이터 처리 및 분석

기술 스택
• 라즈베리파이, 온습도 센서
• AWS IoT Core, AWS Lambda
• FITBIT API
• 공공데이터 포털 openAPI

주요 기능
1. 실시간 환경 모니터링: 온도, 습도, 미세먼지 정보 수집
2. 사용자 건강 데이터 tracking: FITBIT을 통한 심박수, 활동량 등 모니터링
3. 데이터 통합 분석: 환경 데이터와 건강 데이터의 상관관계 분석
4. 알림 서비스: 위험 상황 발생 시 사용자에게 실시간 알림 제공

개발 담당 역할
• 라즈베리파이와 온습도 센서 연결 및 데이터 수집 로직 구현
• AWS IoT Core 설정 및 Lambda 함수 개발
• 수집된 데이터의 실시간 처리 및 분석 로직 구현
• 클라이언트로의 데이터 전송 시스템 구축`
    },
];

const ProjectsSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <Section id="projects" className="bg-gray-800 py-20 relative overflow-hidden min-h-screen">
            <div className="relative z-10 w-full mx-auto px-4 max-w-screen-xl pt-12">
                <h2 className="text-4xl font-bold mb-24 text-white">Projects</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="w-full"
                    slidesPerView={1}
                    spaceBetween={30}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div className="text-white text-center max-w-4xl mx-auto py-8 px-4">
                                <motion.h3
                                    className="text-3xl sm:text-4xl font-bold mb-6"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    className="text-xl sm:text-2xl mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {project.description}
                                </motion.p>
                                <motion.button
                                    onClick={() => setSelectedProject(project)}
                                    className="inline-flex items-center bg-blue-500 text-white px-6 py-3 mt-16 mb-8 rounded-full hover:bg-blue-600 transition-colors text-lg sm:text-xl"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <span className="mr-3">자세히 보기</span>
                                    <ArrowUpRight size={24} />
                                </motion.button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <AnimatePresence>
                {selectedProject && (
                    <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </Section>
    );
};

const WorkExperienceSection: React.FC = () => {
    return (
        <Section id="experience" className="bg-gray-800 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-white">Work Experience</h2>
                <div className="bg-gray-700 rounded-lg p-8 shadow-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center mb-4">
                            <Briefcase className="text-blue-400 mr-3" size={24} />
                            <h3 className="text-2xl font-semibold text-blue-400">백엔드 개발자</h3>
                        </div>
                        <div className="flex items-center mb-6 text-gray-300">
                            <Calendar className="mr-2" size={18} />
                            <span>2023.12 ~ 현재</span>
                            <span className="mx-2">|</span>
                            <span>(주) 하이브로 | Highbrow</span>
                        </div>

                        <p className="mb-6 text-gray-300 leading-relaxed">
                            드래곤 빌리지 컬렉션 모바일 게임의 라이브 글로벌 서비스(한국, 아시아, 북미, 남미, 유럽, 오세아니아 지역) 컨텐츠 개발 및 서버 관리
                        </p>

                        <div className="mb-8">
                            <h4 className="text-xl font-semibold mb-4 text-blue-300 flex items-center">
                                <ChevronRight className="mr-2" size={20} />
                                주요 책임
                            </h4>
                            <ul className="list-disc ml-10 text-gray-300 leading-7 space-y-2">
                                <li>Java를 사용한 서버 사이드 컨텐츠 개발</li>
                                <li>MongoDB(주 컨텐츠 데이터) 및 MySQL(거래소 관련 데이터) 기반 데이터베이스 관리</li>
                                <li>라이브 서비스 중 발생하는 실시간 이슈 대응</li>
                                <li>운영툴 기능 개발 (푸시, 공지, 알림, 데이터 조회, 수정, 삭제 등)</li>
                                <li>매주 업데이트되는 메인 피쳐 및 이벤트 등 컨텐츠 개발</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-4 text-blue-300 flex items-center">
                                <ChevronRight className="mr-2" size={20} />
                                성능 개선
                            </h4>
                            <ul className="list-disc ml-10 text-gray-300 leading-7 space-y-2">
                                <li>빌리지 시스템(재화 및 드래곤 정기 수집) 개선 - 각 건물 개별 수집에서 일괄 처리 및 데이터 구조 변경으로 속도를 향상시킴</li>
                                <li>QA 서버 패치 프로세스 자동화 - 매주 업데이트 하는 프로젝트라는 특수성 때문에 QA를 위해 자주 반복되는 QA 패치(코드 배포 및 테이블 갱신)를 운영툴 기능으로 전환하여 3번의 클릭으로 프로세스 자동화</li>
                                <li>주간 업데이트 프로세스 개선 - 개발 서버에서 데이터 테이블을 업로드 한 후에 각 라이브 서버들로 배포하는 방식을 QA 서버로 업로드 해서 자동으로 배포될 수 있도록 개선 (작업 프로세스 1단계 축소)</li>
                                <li>거래소 조회 기능 개선 - 매주 수 천건의 거래가 발생해서 쌓이는 데이터로 인해 거래소 진입 및 검색 시 네트워크 환경이 불안정할 경우 로딩이 지연 되는 현상이 발생해서 거래 데이터 구조 대폭 변경 및 레디스를 활용해서 캐싱 데이터 이용 (로딩 지연 대폭 개선)</li>
                                <li>API 문서 처리 속도 개선 - 백 개의 API가 등록 되어있는 문서를 새로고침을 하거나 새로운 API가 등록 되었을 경우 매번 해당 API들을 새로 갱신하던 것을 조건 처리하며 로직을 수정하여 라우터에 새로운 api가 등록된 경우만 갱신 처리하고 이외에는 기존 데이터 사용하도록 개선 (로딩 및 데이터 처리 속도 10배 개선)</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

const Activity: React.FC = () => (
        <Section id="activity" className="bg-gray-900 py-20 min-h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-white ">Activity</h2>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <motion.div
                        className="flex flex-col gap-2 mb-4 md:mb-0 w-full md:w-96"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    >
                        <p className="text-gray-400">2022.09 ~ 2023.11</p>
                        <h3 className="text-2xl font-semibold text-blue-400">디지털 역량 강화 사업 서포터즈 활동</h3>
                        <h4 className="text-md text-gray-300">과학기술정보통신부, 한국지능정보사회진흥원</h4>
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-4"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        <ul className="list-disc list-inside ml-4 text-gray-300 leading-8">
                            <li>디지털 역량 강화 관련 서포트 및 기술 지원 활동 수행</li>
                            <li>기술 교육 및 실습을 통해 디지털 리터러시 향상에 기여</li>
                            <li>최신 디지털 기술에 관한 워크샵 및 세미나 조직 지원</li>
                            <li>교육 자료 및 리소스 개발을 위한 팀 협업 참여</li>
                        </ul>
                    </motion.div>
                </div>
                <div className="border-b border-gray-800 my-12"></div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <motion.div
                        className="flex flex-col gap-2 mb-4 md:mb-0 w-full md:w-96"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.4}}
                    >
                        <p className="text-gray-400">2022.03 ~ 2023.11</p>
                        <h3 className="text-2xl font-semibold text-green-400">건국대학교 IT 컨퍼런스 소모임<br/>KONNECT 임원 활동</h3>
                        <h4 className="text-md text-gray-300">건국대학교</h4>
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-4"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.6}}
                    >
                        <ul className="list-disc list-inside ml-4 text-gray-300 leading-8">
                            <li>약 60명 규모의 컨퍼런스 단체 운영</li>
                            <li>최신 기술 및 개인 프로젝트에 대한 의견 공유</li>
                            <li>백엔드 개발자 취업에 관한 정보 공유</li>
                        </ul>
                    </motion.div>
                </div>
                <div className="border-b border-gray-800 my-12"></div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <motion.div
                        className="flex flex-col gap-2 mb-4 md:mb-0 w-full md:w-96"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.4}}
                    >
                        <p className="text-gray-400">2022.06 ~ 2023.03</p>
                        <h3 className="text-2xl font-semibold text-pink-400">건국대학교 알고리즘 스터디<br/>알쿠리즘 활동</h3>
                        <h4 className="text-md text-gray-300">건국대학교</h4>
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-4"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.6}}
                    >
                        <ul className="list-disc list-inside ml-4 text-gray-300 leading-8">
                            <li>성능 개선을 위한 다양한 알고리즘 학습</li>
                            <li>문제 풀이 및 피드백 공유</li>
                            <li>다양한 시각화 자료를 통한 문제 해결력 향상</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </Section>
)

const Footer = () => (
    <footer className="bg-gray-950 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="https://www.linkedin.com/in/%EC%8A%B9%EB%AF%BC-%EC%9D%B4-1b048a328/" target="_blank" rel="noopener noreferrer"
                   className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Linkedin size={30}/>
                </a>
                <a href="mailto:fhzpt902@naver.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Mail size={30}/>
                </a>
            </div>
            <p>&copy; LeeSeungMin_Portfolio. All rights reserved.</p>
        </div>
    </footer>
);

const Portfolio: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'activity'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const NavItems = ({ mobile = false }) => (
        <div className={`${mobile ? 'flex flex-col space-y-4' : 'hidden md:flex md:space-x-4'}`}>
            {['Home', 'About', 'Skills', 'Experience', 'Activity', 'Projects'].map((item) => (
                <motion.a
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`capitalize cursor-pointer transition-colors ${
                        activeSection === item.toLowerCase()
                            ? 'text-blue-400'
                            : mobile
                                ? 'text-white'
                                : isScrolled
                                    ? 'text-white'
                                    : 'text-gray-900'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {item}
                </motion.a>
            ))}
        </div>
    );

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <motion.nav
                initial={{ backgroundColor: 'rgba(17, 24, 39, 0)' }}
                animate={{
                    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(17, 24, 39, 0)',
                    backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)'
                }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 z-50"
            >
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <motion.span
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                            className={`text-lg ${isScrolled ? 'text-white' : 'text-gray-900'}`}
                        >
                            Seungmin
                            <span className="mx-2">|</span>
                            <span className="text-lg">fhzpt902@naver.com</span>
                        </motion.span>
                        <NavItems/>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`focus:outline-none ${isScrolled ? 'text-white' : 'text-gray-900'}`}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-gray-900 z-40 flex items-center justify-center"
                    >
                        <div className="text-center">
                            <NavItems mobile={true} />
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-4 right-4 text-white"
                        >
                            <X size={24} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <main>
                <EnhancedHomeSection />
                <AboutSection />
                <SkillsSection />
                <WorkExperienceSection />
                <Activity />
                <ProjectsSection />
            </main>

            <Footer />
        </div>
    );
};

export default Portfolio;


