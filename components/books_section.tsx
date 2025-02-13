import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { Book } from "lucide-react";
import Image from "next/image";

interface Book {
  name: string;
  link: string;
  author: string;
  description: string;
  category: string;
  imageId: string;
  thumbnail: string;
}

const BOOKS_DATA: Book[] = [
  {
    name: "Designing Data-Intensive Applications",
    link: "https://archive.org/details/designing-data-intensive-applications-th/mode/2up",
    author: "Martin Kleppmann",
    description:
      "An in-depth guide to designing large-scale distributed systems. Covers fundamental concepts of data systems, replication, partitioning, consistency, and system design patterns. Essential reading for software architects and system designers.",
    category: "System Design",
    imageId: "book-0",
    thumbnail: "/books/1.jpg",
  },
  {
    name: "AI Engineering: Building Applications with Foundation Models",
    link: "https://oceanofpdf.com/authors/chip-huyen/pdf-epub-ai-engineering-building-applications-with-foundation-models-download/",
    author: "Chip Huyen",
    description:
      "Comprehensive guide to building AI applications using foundation models. Learn about prompt engineering, fine-tuning, deployment strategies, and best practices for working with large language models.",
    category: "AI/ML",
    imageId: "book-1",
    thumbnail: "/books/2.jpg",
  },
  {
    name: "Hands-On Large Language Models",
    link: "https://oceanofpdf.com/authors/jay-alammar/pdf-epub-hands-on-large-language-models-language-understanding-and-generation-download/",
    author: "Jay Alammar",
    description:
      "Practical guide to working with LLMs. Covers model architecture, training procedures, evaluation methods, and implementation strategies. Includes hands-on examples and real-world applications.",
    category: "AI/ML",
    imageId: "book-2",
    thumbnail: "/books/3.jpg",
  },
  {
    name: "Hands-On Machine Learning",
    link: "https://www.clc.hcmus.edu.vn/wp-content/uploads/2017/11/Hands_On_Machine_Learning_with_Scikit_Learn_and_TensorFlow.pdf",
    author: "Aurélien Géron",
    description:
      "Step-by-step guide to machine learning with Python. Explores machine learning concepts using Scikit-Learn and deep learning with TensorFlow. Perfect for beginners and intermediate practitioners.",
    category: "AI/ML",
    imageId: "book-3",
    thumbnail: "/books/4.jpg",
  },
  {
    name: "Fundamentals of Data Engineering",
    link: "https://oceanofpdf.com/authors/joe-reis/pdf-epub-fundamentals-of-data-engineering-plan-and-build-robust-data-systems-download/",
    author: "Joe Reis",
    description:
      "Complete overview of modern data engineering. Covers data architecture, ETL processes, data warehousing, and data pipeline design. Essential for aspiring and practicing data engineers.",
    category: "Data Engineering",
    imageId: "book-4",
    thumbnail: "/books/5.jpg",
  },
  {
    name: "Python for Data Analysis",
    link: "https://oceanofpdf.com/authors/wes-mckinney/pdf-epub-python-for-data-analysis-download/",
    author: "Wes McKinney",
    description:
      "Comprehensive guide to data analysis with Python. Learn pandas, NumPy, and data manipulation techniques. Perfect for data scientists and analysts working with Python.",
    category: "Data Science",
    imageId: "book-5",
    thumbnail: "/books/6.jpg",
  },
  {
    name: "Designing Machine Learning Systems",
    link: "https://oceanofpdf.com/authors/chip-huyen/pdf-epub-designing-machine-learning-systems-an-iterative-process-for-production-ready-applications-download/",
    author: "Chip Huyen",
    description:
      "Guide to building production-ready ML systems. Covers ML system design, deployment, monitoring, and maintenance. Essential for ML engineers working on production systems.",
    category: "AI/ML",
    imageId: "book-6",
    thumbnail: "/books/7.jpg",
  },
].map((book, index) => ({
  ...book,
  imageId: book.imageId || `book-${index}`,
}));

const BookCard = ({
  book,
  onOpenModal,
}: {
  book: Book;
  onOpenModal: (book: Book) => void;
}) => {
  return (
    <Card className="bg-content1">
      <CardBody className="p-0">
        <Image
          src={book.thumbnail}
          alt={book.name}
          width={200}
          height={300}
          className="w-full object-cover h-48"
        />
      </CardBody>
      <CardHeader>
        <div className="flex flex-col">
          <p className="text-lg font-bold">{book.name}</p>
          <p className="text-small text-default-500">by {book.author}</p>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-col justify-center gap-2">
        <Chip color="secondary" size="sm" className="px-3 py-1 ">
          {book.category}
        </Chip>
        <Button
          color="primary"
          variant="light"
          size="sm"
          className="w-full"
          onClick={() => onOpenModal(book)}
        >
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

const BookSection = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {BOOKS_DATA.map((book, index) => (
          <BookCard key={index} book={book} onOpenModal={setSelectedBook} />
        ))}
      </div>

      <Modal
        isOpen={!!selectedBook}
        onClose={() => setSelectedBook(null)}
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Book className="w-6 h-6" />
                  <span>{selectedBook?.name}</span>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <Image
                      src={selectedBook?.thumbnail || ""}
                      alt={selectedBook?.name || ""}
                      width={200}
                      height={300}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="col-span-2 space-y-4">
                    <div className="flex items-center gap-2">
                      <Chip color="secondary" size="sm">
                        {selectedBook?.category}
                      </Chip>
                      <span className="text-small text-default-500">
                        by {selectedBook?.author}
                      </span>
                    </div>
                    <p className="text-default-500">
                      {selectedBook?.description}
                    </p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    if (selectedBook?.link) {
                      window.open(
                        selectedBook.link,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }
                  }}
                >
                  Download PDF
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BookSection;
