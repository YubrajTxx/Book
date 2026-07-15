"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FrontCover,
  WelcomePage,
  LandingPage,
  AboutPage,
  ExperiencePage,
  ProjectsPage,
  EducationPage,
  SkillsPage,
  ContactPage,
  BackCover,
} from "./ChapterContent";

/* ─── CHAPTERS ─── */
const chapters = [
  { id: "welcome", label: "Welcome", component: WelcomePage },
  { id: "landing", label: "Landing", component: LandingPage },
  { id: "about", label: "About", component: AboutPage },
  { id: "experience", label: "Experience", component: ExperiencePage },
  { id: "projects", label: "Projects", component: ProjectsPage },
  { id: "education", label: "Education", component: EducationPage },
  { id: "skills", label: "Skills", component: SkillsPage },
  { id: "contact", label: "Contact", component: ContactPage },
  { id: "back-cover", label: "Back Cover", component: BackCover },
];

type BookState = "closed" | "opening" | "open" | "closing";

export default function Book() {
  const [bookState, setBookState] = useState<BookState>("closed");
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // 3D Flip States
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [previousSpread, setPreviousSpread] = useState(0);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const bookRef = useRef<HTMLDivElement>(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const totalPages = chapters.length;
  const maxSpread = isMobile ? totalPages - 1 : Math.ceil(totalPages / 2) - 1;

  // Mouse parallax for closed book
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (bookState !== "closed") return;
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    },
    [bookState]
  );

  // Open the book
  const openBook = useCallback(() => {
    if (bookState !== "closed") return;
    setBookState("opening");
    setTimeout(() => {
      setBookState("open");
      setCurrentSpread(0);
      setPreviousSpread(0);
      setIsFlipping(false);
    }, 900);
  }, [bookState]);

  // Close the book
  const closeBook = useCallback(() => {
    if (bookState !== "open") return;
    setBookState("closing");
    setTimeout(() => {
      setBookState("closed");
      setCurrentSpread(0);
      setPreviousSpread(0);
      setIsFlipping(false);
    }, 1200);
  }, [bookState]);

  // Page navigation
  const triggerFlip = useCallback(
    (targetSpread: number, direction: "next" | "prev") => {
      if (isFlipping) return;
      setFlipDirection(direction);
      setPreviousSpread(currentSpread);
      setIsFlipping(true);
      setCurrentSpread(targetSpread);
    },
    [currentSpread, isFlipping]
  );

  const nextPage = useCallback(() => {
    if (currentSpread >= maxSpread) return;
    triggerFlip(currentSpread + 1, "next");
  }, [currentSpread, maxSpread, triggerFlip]);

  const prevPage = useCallback(() => {
    if (currentSpread <= 0) return;
    triggerFlip(currentSpread - 1, "prev");
  }, [currentSpread, triggerFlip]);

  const goToChapter = useCallback(
    (index: number) => {
      const targetSpread = isMobile ? index : Math.floor(index / 2);
      if (targetSpread === currentSpread) return;
      triggerFlip(targetSpread, targetSpread > currentSpread ? "next" : "prev");
    },
    [isMobile, currentSpread, triggerFlip]
  );

  // Keyboard navigation - freed up ArrowUp/Down for scrolling
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Don't turn pages if user is typing in form inputs
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return;
      }
      
      if (bookState === "closed" && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        openBook();
      }
      if (bookState === "open") {
        if (e.key === "ArrowRight" || e.key === "PageDown") {
          e.preventDefault();
          nextPage();
        }
        if (e.key === "ArrowLeft" || e.key === "PageUp") {
          e.preventDefault();
          prevPage();
        }
        if (e.key === "Escape") {
          e.preventDefault();
          closeBook();
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [bookState, openBook, closeBook, nextPage, prevPage]);

  // Touch/swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextPage();
      else prevPage();
    }
  };

  /* ─── BOOK DIMENSIONS ─── */
  const bookW = isMobile ? "min(92vw, 380px)" : "min(90vw, 960px)";
  const bookH = isMobile ? "min(82vh, 600px)" : "min(84vh, 640px)";
  const pageW = isMobile ? "100%" : "50%";

  /* ─── CLOSED BOOK RENDER ─── */
  if (bookState === "closed" || bookState === "opening" || bookState === "closing") {
    const closedW = isMobile ? "min(72vw, 310px)" : "min(42vw, 440px)";
    const closedH = isMobile ? "min(82vh, 520px)" : "min(84vh, 600px)";

    return (
      <div
        className="desk-scene"
        onMouseMove={handleMouseMove}
        tabIndex={0}
        role="button"
        aria-label="Portfolio book. Press Enter to open."
      >
        <motion.div
          ref={bookRef}
          className="book-container cursor-pointer"
          style={{ width: closedW, height: closedH }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            setMousePos({ x: 0, y: 0 });
          }}
          onClick={openBook}
          animate={{
            rotateX: bookState === "closed" ? mousePos.y * -3 : 0,
            rotateY: bookState === "closed" ? mousePos.x * 4 : 0,
            y: isHovering && bookState === "closed" ? -8 : 0,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {/* Book shadow on desk */}
          <motion.div
            className="absolute -bottom-4 left-2 right-2 h-8 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
            animate={{
              opacity: isHovering ? 0.6 : 0.8,
              scaleY: isHovering ? 0.7 : 1,
              y: isHovering ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          <div className="book-wrapper w-full h-full relative" style={{ transformStyle: "preserve-3d" }}>
            {/* Back cover */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background: "linear-gradient(145deg, #462e08 0%, #311e01 50%, #1c1100 100%)",
                borderRadius: "4px 12px 12px 4px",
                boxShadow: "inset 0 0 40px rgba(0,0,0,0.5)",
              }}
            />

            {/* Pages block */}
            <div className="pages-block" />

            {/* Front Cover */}
            <motion.div
              className="book-cover"
              animate={{
                rotateY:
                  bookState === "opening"
                    ? -180
                    : bookState === "closing"
                    ? 0
                    : 0,
              }}
              transition={
                bookState === "closing"
                  ? { duration: 1.2, ease: [0.4, 0, 1, 1] }   // slow ease-in close
                  : { duration: 0.9, ease: [0.4, 0, 0.2, 1] } // snappy open
              }
              style={{ transformOrigin: "left center" }}
            >
              <FrontCover />
              <div className="cover-back" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  /* ─── RENDER STATIC PAGES DURING/AFTER FLIPS ─── */
  // Left and Right indices for CURRENT (or target after flip) spread
  const leftIdx = isMobile ? currentSpread : currentSpread * 2;
  const rightIdx = isMobile ? -1 : leftIdx + 1;
  const leftPageObj = chapters[leftIdx] || null;
  const rightPageObj = rightIdx !== -1 ? (chapters[rightIdx] || null) : null;

  // Left and Right indices for PREVIOUS spread (used during animation background)
  const prevLeftIdx = isMobile ? previousSpread : previousSpread * 2;
  const prevRightIdx = isMobile ? -1 : prevLeftIdx + 1;
  const prevLeftPageObj = chapters[prevLeftIdx] || null;
  const prevRightPageObj = prevRightIdx !== -1 ? (chapters[prevRightIdx] || null) : null;

  // Determine what each side displays while flipping
  let displayLeftPage = leftPageObj;
  let displayRightPage = rightPageObj;

  if (isFlipping) {
    if (isMobile) {
      // Mobile: background displays the page we are going to
      displayLeftPage = chapters[currentSpread] || null;
    } else {
      if (flipDirection === "next") {
        // Flipping next:
        // Left page should still show previous left page
        displayLeftPage = prevLeftPageObj;
        // Right page shows the incoming new right page
        displayRightPage = rightPageObj;
      } else {
        // Flipping prev:
        // Left page shows incoming new left page
        displayLeftPage = leftPageObj;
        // Right page shows previous right page
        displayRightPage = prevRightPageObj;
      }
    }
  }

  // Content for the flipping sheet faces
  const getFlippingPageContent = () => {
    if (isMobile) {
      // Mobile: single page flip
      if (flipDirection === "next") {
        // Front shows the page we're leaving (previousSpread)
        // Back shows the page we're arriving at (currentSpread)
        return {
          front: chapters[previousSpread] || null,
          back: chapters[currentSpread] || null,
        };
      } else {
        // Prev: front shows the page we're leaving (previousSpread)
        // Back shows the page we're arriving at (currentSpread)
        return {
          front: chapters[previousSpread] || null,
          back: chapters[currentSpread] || null,
        };
      }
    }

    // Desktop: two-page spread
    if (flipDirection === "next") {
      // Sheet sits on the right half, hinged on spine (left edge)
      // Front face = the old right page turning away
      // Back face = the new left page being revealed
      return {
        front: prevRightPageObj,
        back: leftPageObj,
      };
    } else {
      // Sheet sits on the left half, hinged on spine (right edge)
      // Front face = the old left page turning away
      // Back face = the new right page being revealed
      return {
        front: prevLeftPageObj,
        back: rightPageObj,
      };
    }
  };

  const flippingContent = getFlippingPageContent();

  return (
    <div className="desk-scene" tabIndex={0}>
      {/* Outer book container */}
      <AnimatePresence>
      <motion.div
        key="open-book"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.6, ease: [0.4, 0, 1, 1] } }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
        style={{ width: bookW, height: bookH }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Book shadow */}
        <div
          className="absolute -bottom-6 left-4 right-4 h-12 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.28) 0%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />

        {/* Bookmark ribbon */}
        <BookmarkNav
          chapters={chapters}
          currentSpread={currentSpread}
          isMobile={isMobile}
          onGoTo={goToChapter}
        />

        {/* The Open Book */}
        <div className="open-book w-full h-full relative bg-cover-inner p-1 rounded-lg shadow-2xl">
          {/* Spine shadow */}
          {!isMobile && <div className="spine-shadow" />}

          {/* Close button in top-left corner of the book */}
          <button
            onClick={closeBook}
            className="absolute top-4 left-4 w-7 h-7 rounded-full bg-paper-dark/80 hover:bg-gold/25 text-charcoal hover:text-gold-dark border border-black/5 hover:border-gold/30 flex items-center justify-center transition-all duration-300 z-50 cursor-pointer group"
            title="Close Book"
            aria-label="Close Book"
          >
            <span className="material-symbols-rounded text-[18px] group-hover:rotate-90 transition-transform duration-300">
              close
            </span>
          </button>

          {/* Left Page (Static / Mobile Page) */}
          <div
            className={`page ${isMobile ? "rounded-lg" : "page-left"}`}
            style={{ width: pageW }}
          >
            {displayLeftPage && React.createElement(displayLeftPage.component)}
            
            {/* Prev corner */}
            {currentSpread > 0 && !isFlipping && (
              <button
                className="page-corner page-corner-left"
                onClick={prevPage}
                aria-label="Previous page"
              />
            )}

            {/* Next corner (Mobile only - since desktop has it on the right page) */}
            {isMobile && currentSpread < maxSpread && !isFlipping && (
              <button
                className="page-corner page-corner-right"
                onClick={nextPage}
                aria-label="Next page"
              />
            )}

            {/* Page Number */}
            {displayLeftPage && (
              <div className="absolute bottom-3 left-4 font-inter text-[10px] text-muted/40 select-none">
                {isMobile ? currentSpread + 1 : currentSpread * 2 + 1}
              </div>
            )}
          </div>

          {/* Right Page (Static) */}
          {!isMobile && (
            <div className="page page-right" style={{ width: pageW }}>
              {displayRightPage && React.createElement(displayRightPage.component)}
              
              {/* Next corner */}
              {currentSpread < maxSpread && !isFlipping && (
                <button
                  className="page-corner page-corner-right"
                  onClick={nextPage}
                  aria-label="Next page"
                />
              )}

              {/* Page Number */}
              {displayRightPage && (
                <div className="absolute bottom-3 right-4 font-inter text-[10px] text-muted/40 select-none">
                  {currentSpread * 2 + 2}
                </div>
              )}
            </div>
          )}

          {/* 3D FLIPPING SHEET — Desktop */}
          {!isMobile && isFlipping && (
            <motion.div
              className={`flipping-sheet ${
                flipDirection === "next"
                  ? "flipping-sheet-right"
                  : "flipping-sheet-left"
              }`}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: flipDirection === "next" ? -180 : 180 }}
              transition={{
                duration: 1.1,
                ease: [0.45, 0.05, 0.25, 1],
              }}
              onAnimationComplete={() => setIsFlipping(false)}
            >
              {/* Front side of the flipping page */}
              <div className={`sheet-face sheet-face-front page ${
                flipDirection === "next" ? "page-right" : "page-left"
              }`}>
                {flippingContent.front && React.createElement(flippingContent.front.component)}
                <div className={`page-curl-shadow ${
                  flipDirection === "next" ? "page-curl-shadow-right" : "page-curl-shadow-left"
                }`} />
              </div>

              {/* Back side revealed after turning */}
              <div className={`sheet-face sheet-face-back page ${
                flipDirection === "next" ? "page-left" : "page-right"
              }`}>
                {flippingContent.back && React.createElement(flippingContent.back.component)}
                <div className={`page-curl-shadow ${
                  flipDirection === "next" ? "page-curl-shadow-left" : "page-curl-shadow-right"
                }`} />
              </div>
            </motion.div>
          )}

          {/* 3D FLIPPING SHEET — Mobile (same animation, full-width page) */}
          {isMobile && isFlipping && (
            <motion.div
              className={`flipping-sheet ${
                flipDirection === "next"
                  ? "flipping-sheet-mobile"
                  : "flipping-sheet-mobile-prev"
              }`}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: flipDirection === "next" ? -180 : 180 }}
              transition={{
                duration: 1.1,
                ease: [0.45, 0.05, 0.25, 1],
              }}
              onAnimationComplete={() => setIsFlipping(false)}
            >
              {/* Front face: the page we're leaving */}
              <div className="sheet-face sheet-face-front page rounded-lg">
                {flippingContent.front && React.createElement(flippingContent.front.component)}
                <div className={`page-curl-shadow ${flipDirection === "next" ? "page-curl-shadow-left" : "page-curl-shadow-right"}`} />
              </div>

              {/* Back face: the page we're arriving at */}
              <div className="sheet-face sheet-face-back page rounded-lg">
                {flippingContent.back && React.createElement(flippingContent.back.component)}
                <div className="page-curl-shadow page-curl-shadow-left" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Navigation bottom bar */}
        <div className="flex items-center justify-between mt-3 px-2 select-none">
          <button
            onClick={prevPage}
            disabled={currentSpread <= 0 || isFlipping}
            className="flex items-center gap-1 font-inter text-[11px] text-white/50 hover:text-gold transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-rounded text-sm">chevron_left</span>
            Prev
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: maxSpread + 1 }).map((_, i) => (
              <button
                key={i}
                disabled={isFlipping}
                onClick={() => goToChapter(isMobile ? i : i * 2)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentSpread
                    ? "bg-gold w-4"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          {currentSpread >= maxSpread ? (
            <button
              onClick={closeBook}
              disabled={isFlipping}
              className="flex items-center gap-1 font-inter text-[11px] text-white/50 hover:text-gold transition-colors"
            >
              Close Cover
              <span className="material-symbols-rounded text-sm">close</span>
            </button>
          ) : (
            <button
              onClick={nextPage}
              disabled={isFlipping}
              className="flex items-center gap-1 font-inter text-[11px] text-white/50 hover:text-gold transition-colors"
            >
              Next
              <span className="material-symbols-rounded text-sm">chevron_right</span>
            </button>
          )}
        </div>
      </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─── BOOKMARK NAV ─── */
function BookmarkNav({
  chapters,
  currentSpread,
  isMobile,
  onGoTo,
}: {
  chapters: { id: string; label: string }[];
  currentSpread: number;
  isMobile: boolean;
  onGoTo: (index: number) => void;
}) {
  const [showMenu, setShowMenu] = useState(false);
  // On mobile each chapter = one spread; on desktop two chapters share a spread
  const isActiveChapter = (i: number) =>
    isMobile ? i === currentSpread : Math.floor(i / 2) === currentSpread;

  return (
    <>
      <div
        className="bookmark-ribbon"
        onClick={() => setShowMenu(!showMenu)}
        title="Chapter Navigation"
      />

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 right-4 z-40 bg-white rounded-lg shadow-xl border border-black/5 py-2 min-w-[150px]"
          >
            {chapters.map((ch, i) => (
              <button
                key={ch.id}
                onClick={() => {
                  onGoTo(i);
                  setShowMenu(false);
                }}
                className={`w-full text-left px-4 py-1.5 font-inter text-xs transition-colors ${
                  isActiveChapter(i)
                    ? "text-gold-dark bg-gold/5 font-medium"
                    : "text-charcoal-light hover:bg-paper-dark"
                }`}
              >
                <span className="text-[10px] text-muted mr-2">{String(i + 1).padStart(2, "0")}</span>
                {ch.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
