import React from "react";

const page = () => {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <img
            src="/assets/gallery/bedroom-1.jpeg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
        <div>
          <img
            src="/assets/gallery/gallery-1.jpeg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
        <div>
          <img
            src="/assets/bedroom.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <img
            src="/assets/gallery/gallery-2.jpeg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
        <div>
          <img
            src="/assets/gallery/gallery-5.jpeg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
        <div>
          <img
            src="/assets/gallery/gallery-4.jpeg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <img
            src="/assets/gallery/gallery-7.jpeg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
        <div>
          <img
            src="/assets/gallery/gallery-8.jpeg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
        <div>
          <img
            src="/assets/gallery/gallery-9.jpeg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <img
            src="/assets/gallery/gallery-10.jpeg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
        <div>
          <img
            src="/assets/gallery/gallery-5.jpeg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
        <div>
          <img
            src="/assets/gallery/gallery-11.jpeg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
